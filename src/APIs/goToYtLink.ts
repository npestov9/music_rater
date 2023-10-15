import React from 'react';
import axios from 'axios';

export const goToYtLink= (songSearchTerm: string) => {
    const API_KEY = 'AIzaSyDuPb6_V5Wna72peloEWDt-F54JuDWqDqs'; // Replace with your actual API key

    const handleSearch = async () => {
        try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
            key: API_KEY,
            q: songSearchTerm,
            part: 'snippet',
            maxResults: 1,
            type: 'video',
            },
        });

        const videoId = response.data.items[0].id.videoId;
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        } catch (error) {
        console.error('Error fetching data: ', error);
        }
    };

    handleSearch();
};
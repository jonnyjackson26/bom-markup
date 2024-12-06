import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "ChapterPage.css"


export function ChapterPage({ book, chapter, setSelectedChapter, setSelectedBook }) {
    const [verses, setVerses] = useState([]);
    

    useEffect(() => {
        //verses
        const fetchVerses = async () => {
            try {
                let path = "";
                path = `data/bom/${book.urlName}/${chapter}.txt`;
                const response = await fetch(path);
                const text = await response.text();
                const lines = text.split('\n').slice(0, -1); //I slice because the text files have an empty \n at the end
                setVerses(lines);

            } catch (error) {
                console.error('Error fetching verses:', error);
            }
        };
        fetchVerses();

    }, [book.urlName, chapter]);


    return (
        <>

            <h1 className="title">
                The book of {book.urlName} chapter {chapter}
            </h1>


             {/* you gotta do .length>0 bc it takes time to get the data but render is near-instant. */}
            {verses}


        </>
    );
}
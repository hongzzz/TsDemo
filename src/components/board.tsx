import React, { useState, useEffect } from 'react';

interface IProps {
    text: string;
}

const Board = (props: IProps): JSX.Element => {
    const [name, setName] = useState<string>('hongzzz');

    useEffect(() => {
        let timer: number = window.setInterval(() => {
            setName(name + '2');
        }, 1000);

        return () => {
            window.clearInterval(timer);
        }
    });

    return (
        <div>
            { props.text }
            { name }
        </div>
    );
};

export default Board;

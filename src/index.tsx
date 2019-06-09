import React from 'react';
import { render } from 'react-dom';
import './index.less';
import Board from '@/components/board';

render(
    <div className="main">
        <Board text={ 'i am ' }/>
    </div>,
    document.getElementById('root')
);

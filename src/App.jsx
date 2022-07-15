import './App.css';
import React from 'react';

import MegaSenaGenerator from './components/basics/MegaSenaGenerator';
import Card from './components/layout/Card';

export default function App(){
    return (
        <div className='App'>
            <div className='Cards'>
                <Card title='MegaSena Generator'>
                    <MegaSenaGenerator amount={6} />
                </Card>

                <Card title='MegaSena Generator'>
                    <MegaSenaGenerator amount={7} />
                </Card>

                <Card title='MegaSena Generator'>
                    <MegaSenaGenerator amount={8} />
                </Card>   

                <Card title='MegaSena Generator'>
                    <MegaSenaGenerator amount={9} />
                </Card> 
            </div>
        </div>
    )
}
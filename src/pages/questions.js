import React, { useState, useEffect } from 'react'
import Card from '../components/card';
import Countdown, { zeroPad } from 'react-countdown';
import Button from '../components/button';


export default function Questions(props) {
    const { usedQuestions, updateUsedQuestions, data } = props;
    const { questions, questionTimeInMinutes, hintShowInMinutes } = data;
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [started, setStarted] = useState(false);
    const [now, setNow] = useState(0)
    const [hintVisible, setHintVisible] = useState(false);
    const [clickable, setClickable] = useState(true)
    useEffect(() => {
        const tm = started ? setTimeout(function () {
            setHintVisible(true)
        }, hintShowInMinutes * 60 * 1000) : null

        return () => {
            if (tm) clearTimeout(tm)
        }
    }, [started])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <h1 style={{ fontSize: '3em' }}>
                Table Topics
            </h1>
            <div style={{ display: 'flex', height: '80vh' }}>
                <div style={{ border: '1px solid green', padding: '20px', width: '200px', borderRadius: '20px', margin: '5px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {questions.map(item => {
                        const used = usedQuestions.includes(item.id);
                        return <Card key={item.id} style={{ backgroundColor: used ? !!selectedQuestion && selectedQuestion.id === item.id ? 'purple' : 'grey' : 'green', color: 'white', borderRadius: '50%', cursor: clickable ? 'pointer' : 'no-drop' }} onClick={() => {
                            if (!used && !!clickable) {
                                setClickable(false)
                                setStarted(false)
                                setHintVisible(false)
                                setNow(0)
                                setSelectedQuestion(item)
                                updateUsedQuestions(item.id)
                            }
                        }}>{item.id}</Card>
                    })}
                </div>
                <div style={{ width: '100%', border: '1px solid green', borderRadius: '20px', margin: '5px' }}>
                    <br />
                    <br />
                    <br />
                    {!selectedQuestion && <h3>Please select a question from the left panel</h3>}

                    {!!selectedQuestion &&
                        <>
                            <h1 style={{ color: 'green', padding: '5px 20px' }}>{selectedQuestion.title}</h1>
                            <br />
                            {hintVisible && <><h3>Here are some hints on what you can talk about.</h3>
                                <br />
                                <br />
                                <ul style={{ width: '400px', margin: 'auto' }}>
                                    {selectedQuestion.hints.map((item, idx) => <li key={selectedQuestion.id + '' + idx} ><h4>{item}</h4></li>)}
                                </ul>
                            </>}
                        </>
                    }
                </div>
                <div style={{ border: '1px solid green', borderRadius: '20px', margin: '5px', width: '30%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <h1>TIMER</h1>
                    {!!selectedQuestion && started ? <Countdown date={now + Number(questionTimeInMinutes * 60 * 1000)}
                        renderer={({ minutes, seconds }) => {
                            // Render a countdown
                            return <div style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white' }}>
                                <span style={{ fontSize: '3em' }}>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
                            </div>
                        }}
                        onComplete={() => setClickable(true)}
                    /> :
                        <div style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white' }}>
                            <span style={{ fontSize: '3em' }}>00:00</span>
                        </div>}
                    <br />
                    <br />
                    <br />
                    <Card style={{ borderRadius: '50%', backgroundColor: 'red', height: '50px', width: '50px', cursor: 'pointer' }} onClick={() => {
                        if (!!selectedQuestion && !started) {
                            setStarted(true);
                            setNow(Date.now())
                        }
                    }} />

                    <div style={{ position: 'absolute', bottom: '55px' }}>

                        <Button text="Quit" onClick={() => {
                            setClickable(true);
                            setSelectedQuestion(null)
                        }}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

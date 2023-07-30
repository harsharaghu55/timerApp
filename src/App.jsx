import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Timer from './Timer'

function App() {
	const [second, setSecond] = useState(0)
	const [minute,setMinute] = useState(0)
	const [hour,setHour] = useState(0)
	const [isRunning,setIsRunning] = useState(false)
	
	const startTimer = function (){
		let interval = setInterval(function (){
			setSecond((prevSec) => {
				if(prevSec < 59){
					return prevSec+1
				}else{
					return 0
				}
			})
		}, 100);
		setIsRunning(interval)
	}
	const pauseTimer = () => {
		clearInterval(isRunning)
	}
	const stopTimer = () => {
		pauseTimer()
		setSecond(0)
	}
	useEffect(()=>{
		if(second === 59){
			setMinute((prevMin) => prevMin + 1)
		}
		
	},[second])
	
	return (
		<>
		<h1>Timer</h1>
		<div>
			{minute}:{second.toLocaleString('en-US',{
				minimumIntegerDigits:2,
				useGrouping:false
			})}
		</div>
		<div className="card">
			<button onClick={() => startTimer()}>
				start
			</button>
			<button onClick={pauseTimer}>
				pause
			</button>
			<button onClick={stopTimer}>
				stop
			</button>
		</div>
		</>
	)
}

export default App

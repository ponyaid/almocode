import { useEffect, useState } from 'react'
import { Article } from '../models/atricle'


const Questions = ({ questions }: { questions: Article[] }) => {
    const [currentQuestion, setCurrentQuestion] = useState(null)

    useEffect(() => {
        if (questions.length) {
            setCurrentQuestion(questions[0].id)
        }
    }, [questions])

    return (
        <div className="faq">
            {questions.map((question =>
                <div key={question.id} className={`question ${question.id === currentQuestion ? 'question_active' : ''}`}>
                    <p className="question__title">{question.attributes.title}</p>
                    <p className="question__subtitle">Lorem ipsum dolor sit amet.</p>
                </div>
            ))}
        </div>
    )
}

export default Questions
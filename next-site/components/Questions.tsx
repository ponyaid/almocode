import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { Article } from '../models/atricle'
import { MdNorthEast } from 'react-icons/md'


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
                <Link key={question.id} href={`/blog/${question.attributes.slug}`}>
                    <a className={`${question.id === currentQuestion ? 'question question_active' : 'question'}`}>
                        <div>
                            <p className="question__title">{question.attributes.title}</p>
                            <div className="question__subtitle">
                                <ReactMarkdown>{question.attributes.text}</ReactMarkdown>
                            </div>
                        </div>
                        <MdNorthEast
                            className="question__icon"
                        />
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Questions
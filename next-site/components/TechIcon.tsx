import {
    FaReact,
    FaJs,
    FaNode,
    FaPython,
    FaFigma,
    FaGithub,
    FaShopify,
    FaHtml5,
    FaSass,
    FaDocker,
    FaSketch,
    FaUbuntu,
} from 'react-icons/fa'


const TechIcon = ({ tech }: { tech: string }) => {
    if (tech.toLowerCase() === 'react')
        return <FaReact />
    if (tech.toLowerCase() === 'js')
        return <FaJs />
    if (tech.toLowerCase() === 'node')
        return <FaNode />
    if (tech.toLowerCase() === 'python')
        return <FaPython />
    if (tech.toLowerCase() === 'figma')
        return <FaFigma />
    if (tech.toLowerCase() === 'github')
        return <FaGithub />
    if (tech.toLowerCase() === 'shopify')
        return <FaShopify />
    if (tech.toLowerCase() === 'html5')
        return <FaHtml5 />
    if (tech.toLowerCase() === 'html5')
        return <FaHtml5 />
    if (tech.toLowerCase() === 'sass')
        return <FaSass />
    if (tech.toLowerCase() === 'docker')
        return <FaDocker />
    if (tech.toLowerCase() === 'sketch')
        return <FaSketch />
    if (tech.toLowerCase() === 'ubuntu')
        return <FaUbuntu />
    return null
}


export default TechIcon
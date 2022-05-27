import { Container } from '../../styles/Categories.module.css'

export default function CustomContainer({children}) {
    return (
        <div className={Container}>
            {children}
        </div>
    )
}
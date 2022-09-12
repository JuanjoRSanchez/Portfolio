import './headerJuegos.css'

export default function Snake(props) {

    return (
        <>
            <header className='headerJuegos'>
                {props.titulo}
            </header>
        </>
    )
}

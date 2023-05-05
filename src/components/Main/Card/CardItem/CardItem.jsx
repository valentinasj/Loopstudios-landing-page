
export const CardItem = ({imagen, texto}) => {

    return (
        <div>
            <img src={imagen} />
            <h1>{texto}</h1>
        </div>
    )
}
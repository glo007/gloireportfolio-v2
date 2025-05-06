interface TitleProps {
    title: string;
}
const Title = ({ title }: TitleProps) => {
    return (
        <div>
            <h1 className="uppercase font-bold mb-5 text-center text-3xl">
                {title}
            </h1>
        </div>
    )
}
export default Title;
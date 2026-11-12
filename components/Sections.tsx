type SectionsType = {
    content: string
}
export const Sections = (props:SectionsType) => {
    const {content} = props
    return (
        <button className="w-[80px] h-[37px] rounded-[4px] flex justify-center items-center bg-white hover:bg-[#22241F] text-[12px] text-[#65675F] hover:text-white font-[400]">{content}</button>
    )
}
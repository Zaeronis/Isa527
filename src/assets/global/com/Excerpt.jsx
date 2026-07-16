import '../styles/Excerpt.css'
import Verse from "./Verse.jsx";

export default function Excerpt({title, excerpt, inline}) {
    return (
        <>
            <p
                className="excerptTitle"
            >
                {title}
            </p>
            {excerpt.map((verse) => (
                <Verse
                    key={verse.num}
                    verseNum={verse.num}
                    verseText={verse.text}
                    inline={inline}
                />
            ))}
        </>
    )
}
import '../styles/Verse.css'

export default function Verse({verseNum, verseText, inline = false}) {
    return (
        <>
            <p className={!inline ? "verseBlock" : "verseInline"}>
                <span className="verseNum">
                    {verseNum}
                </span>
                {verseText}
            </p>
        </>
    )
}
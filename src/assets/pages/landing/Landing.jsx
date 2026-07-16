import './Landing.css'
import Banner from "../../global/com/Banner.jsx";
import Card from "../../global/com/Card.jsx";
import Excerpt from "../../global/com/Excerpt.jsx";
import Verse from "../../global/com/Verse.jsx";
import { Isa52,V7 } from "../../global/data/verses/isaiah52_7.js";

function Tagline() {
    return (
        <p className="intro">
            A platform to <span className="title">study</span>
            <br/>
            A way to <span className="title">grow</span>

            <br/>
            A place to <span className="title">belong</span>
        </p>
    )
}

function Summary() {
    return (
        <p>
            <br/>
            The Lord's Word was never meant to sit behind a paywall.
            <br/>
            52:7 opens straight to a full Bible and a complete hymnal.
            <br/>
            Free for everyone, forever, with no account necessary,
            <br/>
            no ads, and nothing between you and the gospel.
            <br/>
            <br/>
            From there, faith grows in rhythm rather than bursts:
            <br/>
            a verse every morning, a reflection every week, and
            <br/>
            a parable every month worth sitting with, plus
            <br/>
            notebooks to trace what the Word is working in you
            <br/>
            along the way.
            <br/>
            <br/>
            And because nobody was made to walk this road alone,
            <br/>
            52:7 brings your church, your groups, and your people
            <br/>
            together in one place — and connects you beyond your
            <br/>
            own walls to a wider family of congregations walking
            <br/>
            the Lord's path with you.
            <br/>
            <br/>

        </p>
    )
}

export default function Landing() {
    return (
        <>
            <div>
                <Banner className="landingBanner"/>
                <div className="content">
                    <div className="contentTop">
                        <div className="contentTopLeft">
                            <Tagline />
                            <Summary />
                            <p>

                            </p>
                            <p>

                            </p>
                            <p>

                            </p>
                            <Verse
                                verseNum={V7.num}
                                verseText={V7.text}
                            />
                        </div>
                        <div className="contentTopRight">
                            <div className="userExample">
                                <Card>

                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
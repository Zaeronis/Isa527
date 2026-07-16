import '../styles/Banner.css'
import Card from './Card.jsx';

export default function Banner({ className }) {
    return (
        <div className={`banner ${className}`}>
            <div
                className="titleBox"
            >
                <div className="logoBox">
                    <img
                        src="isa.png"
                        alt="Isa52:7"
                        className="logo"
                    />
                </div>
                <div>
                    <p className="title">
                        52:7
                    </p>
                </div>
            </div>
        </div>
    )
}
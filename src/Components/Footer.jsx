import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" style={{ padding:"10px", zIndex:"1000", transition:"0.5s", backgroundColor:"#e4e4e4", width:"100%", height:"50px"}}>
                <div className="" id="rodape">
                    <div className="text-center">
                        <p>&copy; Todos diretos reservados à <span style={{color:"#b10a79"}}>DONATIVA</span></p>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
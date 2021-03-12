import React from 'react';
import "./Card.css";

function Card({ id, filehash, filename, date, desc, ftype }) {
    if (ftype !== 'audio') {
        return (

            <div key={id} className="card">
                <div className="card__mainContent">
                    {ftype === 'image' ? <img
                        key={id}
                        src={'https://ipfs.infura.io/ipfs/' + filehash}
                        alt=""
                    /> : (ftype === 'video' ? <video
                        preload="true" controls
                        key={id}>
                        <source src={'https://ipfs.infura.io/ipfs/' + filehash} />
                    </video> : (ftype === 'document' ? <embed
                        key={id}
                        src={"https://ipfs.infura.io/ipfs/" + filehash}
                        width="100px"
                        height="200px"
                    /> : null))}

                </div>
                <div className="content">
                    <div className="header"><h4>{filename}</h4><span className="meta">{date}</span></div>

                    <div className="description">
                        {/* @ts-ignore */}
                        <p>{desc}</p> <a target='_blank' href={`https://ipfs.infura.io/ipfs/${filehash}`}>View</a>
                    </div>
                </div>
            </div >
        )
    }
    return null;
}

export default Card

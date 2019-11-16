import React from 'react';
import './ImageLink.css';



const ImageLink = ({ topText, bottomText, handleTopTextChange, handleBottomTextChange, makeMeme, stage, toggleStage, preview, memeReady, reset }) => {

    return (
        <div>
            <div className='container' style={{ paddingTop: '5px' }}>

                <div className='form center pa1 br3 shadow-5'>
                    <div className='memeform column is-fifths-fifths'>
                        <div style={{ display: !!preview || !memeReady ? 'block' : 'none' }}>
                            <div className='field'>
                                <label className='label1'>
                                    Top Text(Next Line Space):
        </label>
                                <div className='control'>
                                    <input
                                        className='input'
                                        type='text'
                                        placeholder="Meme's Top Text"
                                        value={topText}
                                        disabled={memeReady}
                                        onChange={handleTopTextChange} />
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label1'>
                                    Bottom Text:
        </label>
                                <div className='control'>
                                    <input
                                        className='input'
                                        type='text'
                                        value={bottomText}
                                        disabled={memeReady}
                                        onChange={handleBottomTextChange}
                                        placeholder="Meme's Bottom Text" />
                                </div>
                            </div>
                        </div>
                        {!memeReady ? (
                            <button style={{ display: !!topText && !!bottomText ? 'block' : 'none' }} className='button is-dark' onClick={makeMeme}>
                                Make a MEME
       </button>
                        ) : (
                                <div className='button-group center'>
                                    <button onClick={reset} className='button is-dark ' style={{ display: 'inline-block' }}>
                                        RESET
         </button>
                                    <a
                                        href={preview}
                                        target='_blank'
                                        className='button is-link'
                                        style={{ marginleft: 'auto', marginright: 'auto', width: '50%', display: 'inline-block', alignItems: 'auto' }}>Download</a>
                                </div>
                            )}
                        <div className='container1'>
                            <label className='label1'>
                                Option 1: Copy image address from below or google > click upload > paste in WebAddress
        </label>/br
        <label className='label1'>
                                Option 2: Click Upload then Upload from your Desktop.
        </label>/br
      <div className='row1'>
                                <div className='column1'>
                                    <div className='zone '>
                                        <img alt='logo' src={"https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg"} />
                                    </div>
                                    <div className='zone '>
                                        <img alt='logo' src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chimpanzee-nature-photos-1537974549.jpg?crop=1.00xw:0.920xh;0,0.0803xh&resize=980:*"} />
                                    </div>
                                    <div className='zone '>
                                        <img alt='logo' src={"https://st2.depositphotos.com/1072614/8388/i/450/depositphotos_83882270-stock-photo-cats-taking-a-selfie-with.jpg"} />
                                    </div>
                                </div>
                                <div className='column1'>
                                    <div className='zone '>
                                        <img alt='logo' src={"https://st2.depositphotos.com/1177973/11923/i/950/depositphotos_119234560-stock-photo-basset-hound-dog.jpg"} />
                                    </div>
                                    <div className='zone '>
                                        <img alt='logo' src={"https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_700,h_448/https://drolldump.com/wp-content/uploads/funny-monkey-pictures-03.jpg"} />
                                    </div>
                                    <div className='zone '>
                                        <img alt='logo' src={"https://100-jo.com/wp-content/uploads/2018/02/best-funny-animal-videos-2018-nothing-will-make-you-laugh-so-hard-as-this-will.jpg"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageLink;
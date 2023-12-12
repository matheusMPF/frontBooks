import { useState } from "react";

const SingleFileUploader = (props) => {
    const [file, setFile] = useState(null);
    const [showButton, setShowButton] = useState(true);
    const [sendImage, setSendImage] = useState(false);
    const [textFile, setTextFile] = useState("Escolha uma imagem");

    const handleFileChange = (e) => {
        if (e.target.files) {
            setSendImage(false);
            setShowButton(false);
            setFile(e.target.files[0]);
            handleUpload(e);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        console.log(file);
        if (file) {
            props.setStates(file);
            setSendImage(true);
            setTextFile("")
            setShowButton(true);
        }
    };

    return (
        <>
            <div>
                {(file == null || showButton) && (
                    <div>
                        <label htmlFor="file" className="sr-only">
                            {textFile}
                        </label>
                        <input
                            id="file"
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>
                )}
            </div>
            {sendImage && (
                <div>
                    <br />
                    <br />
                    <span>Imagem salva com sucesso...</span>
                    <br />
                    <br />
                </div>
            )}
            {file != null && !showButton && (
                <div>
                    <button onClick={(e) => handleUpload(e)}>
                        Enviar imagem
                    </button>
                </div>
            )}
        </>
    );
};

export default SingleFileUploader;
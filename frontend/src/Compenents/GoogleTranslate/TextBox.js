import SelectDropDown from "./SelectDropDown";
import "./Translate.css";
import Modal from "./Modal";

const TextBox = ({selectedLanguage,style, setShowModal}) => {
    return(
        <div className={style}>
            <SelectDropDown
                style={style}
                setShowModal={setShowModal}
            selectedLanguage={selectedLanguage}
            />

            <textarea
                placeholder={style=='input' ? 'Enter text here' : 'Translation will appear here'}
                disabled={style=='output' }
            />
            <Modal/>
        </div>
    )
}
export default TextBox;
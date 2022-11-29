import {useState} from "react";

const Modal = ({setShowModal, languages, chosenLanguage, setChosenLanguage}) => {


       const [ searchedLanguage, setSearchedLanguage] = useState('')

       //const filteredLanguages = languages.filter((language) => language.toLowerCase().startsWith(searchedLanguage.toLowerCase()))

       const handleChange = (e) => {
           setSearchedLanguage(e.target.value)
           setChosenLanguage(e.target.value)
       }

       const handleClick = (e)=> {
           setChosenLanguage(e.target.textContent)
           setShowModal(null)
       }

    return(
        <div className="language-list">

            <div className="search-list">
                <input value = {searchedLanguage} onChange={handleChange}/>
                <div className="close-button" onClick={() =>setShowModal(null)}>
                    <svg
                    focusable="false"
                    smlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                        <path d="M19 6.41.L17 5 12 10.59 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>


                    </svg>
                </div>
            </div>
            <div className="option-conatainer">
                <ul>

                </ul>

            </div>

        </div>
    )
}
export default Modal;
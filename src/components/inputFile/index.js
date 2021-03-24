import React, {useState, useEffect} from "react";
import style from "./index.module.css";
import CSVReader from "react-csv-reader";
import PropTypes from "prop-types";

const InputFile = ({setFile, setMaxCounter, isFile}) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (!isFile) {
            setTitle("");
        }
    }, [isFile]);

    return (
        <div className={style.header}>
            <div className={style.btn}>
                <div className={style.btn_title}>
                    {!(title && title.name.length) ? "Select files" : "File selected"}
                </div>
                <div>
                    <CSVReader
                        cssLabelClass="file"
                        onFileLoaded={(data, fileInfo) => {
                            setTitle(fileInfo);
                            setFile(data);
                            setMaxCounter(data.length);
                        }}
                    />
                </div>
            </div>

            <span>{title.name} </span>
        </div>
    );
};

InputFile.propTypes = {
    setFile: PropTypes.func,
    setMaxCounter: PropTypes.func,
    isFile: PropTypes.bool,
};

export default InputFile;

import React from "react";

const TagsComponent = ({ tags }) => {    
    console.log(tags);
    // const tagDisplay = tags.map((tag, index) => {
    //     return <li key={index}><span>{tag}</span></li>
    // });
    return(
        <ul className="artist-tags-components">
            {/* {tagDisplay} */}
        </ul>
    );

};

export default TagsComponent;
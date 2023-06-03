import React from "react";

function Filter({ onfilterGreased, filterGreased }){
    return (
        <form>
            <input 
              type="checkbox" 
              checked={filterGreased} 
              onChange={e => onfilterGreased(e.target.checked)} 
            />
            Filter out ungreased hogs
        </form>
      )
}

export default Filter;
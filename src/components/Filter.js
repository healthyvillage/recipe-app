import React from 'react';

function filter() {
    return ( 
        <div className="filters_group">
            <div className="filters_toggle">
                <button>
                    <span>Health labels</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </button>

                <div className="filters_content">
                    <form>
                        <div className="controls">
                            <div>
                                <input type="checkbox" value="Vegetarian"></input>
                                <label>Vegetarian</label>
                            </div>

                            <div>
                                <input type="checkbox" value="vegan"></input>
                                <label>Vegan</label>
                            </div>

                            <div>
                                <input type="checkbox" value="nuts-free"></input>
                                <label>Nuts-free</label>
                            </div>
                        </div>

                        <button>Apply Labels</button>
                        <button>Clear</button>
                    </form>
                </div>
            </div>

            <div className="filters_toggle">
                <button>
                    <span>Diet labels</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </button>

                <div className="filters_content">

                </div>
            </div>
        </div>
     );
}

export default filter;
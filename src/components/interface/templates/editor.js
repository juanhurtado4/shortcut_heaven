import React from 'react';
import MacBezel from "./bezel";

function EditorHeader() {
    return (
        <header>
            <nav>
                <div className="nav">
                    <div className="nav__tab">index.js</div>
                </div>
            </nav>
        </header>
    )
}

function EditorBody() {
    return (
        <div className="editor">
            <span className="editor__ln">
               1
               <span className="editor__ln--active">
                  <input type="text" className="editor__ln--input" autoFocus/>
               </span>
            </span>

            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
        </div>
    )
}

function EditorFooter() {
    return <footer className="footer"></footer>;

}


function EditorTemplate(props) {
    return (
        <div className="interface">
            <MacBezel
                name={props.name}
                type={props.type}
            />
            <EditorHeader/>
            <EditorBody/>
            <EditorFooter/>
        </div>
    )

}

export default EditorTemplate;

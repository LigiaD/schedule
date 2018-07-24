import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';
class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="libary-course__title-check">
                <label className="library-course__title">Problem Solving</label>
                { Icon( 'fas fa-check', 'library-course__icon' ) }
                
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum tellus non mi cursus accumsan. Donec lacinia bibendum tellus. Duis id lectus sem. Integer ex sem, placerat eget dapibus ac, ornare vel justo. Nulla ultricies egestas cursus. Aenean faucibus, tortor sit amet ullamcorper finibus, nibh ligula tincidunt sem, ac iaculis turpis lectus vitae magna. Duis eu sapien vehicula, bibendum neque eget, vulputate felis. </p>
                  
                </div>
            </div>
        )
    }
}

export default LibraryCourse;
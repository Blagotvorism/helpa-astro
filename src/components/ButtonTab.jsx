import { render } from "solid-js/web";
import { createSignal } from "solid-js";
import Button from './Button.astro';

function ButtonTab() {
    const [current, setCurrent] = createSignal('btn');

    return (
        <div class="tab_list_container">
            <ul class="event_tab">
                <li class="tab-item" id="all_tab"><Button theme='tab-link' class='btn btn_tab-link active' !isFilled>Все</Button></li>
                <li class="tab-item" id="nature_tab"><Button theme='tab-link' class='btn btn_tab-link' !isFilled>Защита природы</Button></li>
                <li class="tab-item" id="healthcare_tab"><Button theme='tab-link' class='btn btn_tab-link' !isFilled>Помощь онкобольным</Button></li>
                <li class="tab-item" id="loan_tab"><Button theme='tab-link' class='btn btn_tab-link' !isFilled>Помощь закредитованным</Button></li>
                <li class="tab-item" id="sport_tab"><Button theme='tab-link' class='btn btn_tab-link' !isFilled>Развитие спорта</Button></li>
            </ul>
        </div>
    );
}
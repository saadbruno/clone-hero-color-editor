// Default clone hero colors
var colorData = {
    "drums": {
        "drums_striker_base_green": "#FFFFFF",
        "drums_striker_base_blue": "#FFFFFF",
        "drums_striker_base_yellow": "#FFFFFF",
        "drums_striker_base_red": "#FFFFFF",
        "drums_striker_head_light_kick": "#FFCE86",
        "drums_striker_head_light_green": "#00FF00",
        "drums_striker_head_light_blue": "#0089FF",
        "drums_striker_head_light_yellow": "#FFFF00",
        "drums_striker_head_light_red": "#FF0000",
        "drums_striker_head_cover_green": "#00FF00",
        "drums_striker_head_cover_blue": "#0089FF",
        "drums_striker_head_cover_yellow": "#FFFF00",
        "drums_striker_head_cover_red": "#FF0000",
        "drums_striker_cover_green": "#00FF00",
        "drums_striker_cover_blue": "#0089FF",
        "drums_striker_cover_yellow": "#FFFF00",
        "drums_striker_cover_red": "#FF0000",
        "note_anim_kick_sp_active": "#00FFFF",
        "note_overlay_kick_sp_phrase": "#00D7D7",
        "note_anim_kick_sp_phrase_active": "#FFFFFF",
        "note_anim_kick_sp_phrase": "#FFFF00",
        "note_kick_sp_active": "#009178",
        "note_kick_sp_phrase_active": "#FFFFFF",
        "note_kick_sp_phrase": "#FF4600",
        "note_anim_kick": "#FFFF00",
        "note_kick": "#FF4600",
        "cym_anim_sp_active": "#7CFFD6",
        "cym_anim_sp_phrase_active": "#FFFFFF",
        "cym_anim_sp_phrase": "#7CFFD6",
        "cym_anim_blue": "#609EFF",
        "cym_anim_yellow": "#FFEF5B",
        "cym_anim_red": "#FF8B8B",
        "cym_anim_green": "#A5FF7B",
        "cym_sp_active": "#7CFFD6",
        "cym_sp_phrase_active": "#7CFFD6",
        "cym_sp_phrase": "#7CFFD6",
        "cym_blue": "#1D63FF",
        "cym_yellow": "#FFE531",
        "cym_red": "#FF4663",
        "cym_green": "#0CFF0C",
        "tom_anim_sp_active": "#51FFFF",
        "tom_anim_sp_phrase_active": "#FFFFFF",
        "tom_anim_sp_phrase": "#51FFFF",
        "tom_anim_blue": "#2685FF",
        "tom_anim_yellow": "#FFFF26",
        "tom_anim_red": "#FF2F2F",
        "tom_anim_green": "#19FF19",
        "tom_sp_active": "#00FFFF",
        "tom_sp_phrase_active": "#00FFFF",
        "tom_sp_phrase": "#00FFFF",
        "tom_blue": "#0089FF",
        "tom_yellow": "#FFFF00",
        "tom_red": "#FF0000",
        "tom_green": "#00FF00"
    },
    "other": {
        "combo_sp_active_glow": "#FFFFFF",
        "combo_four_glow": "#E8B1FF",
        "combo_three_glow": "#F0FFF0",
        "combo_two_glow": "#FFFF00",
        "combo_sp_active": "#00CCCC",
        "combo_four": "#874E9E",
        "combo_three": "#00FF00",
        "combo_two": "#D55800",
        "combo_one": "#FFDD00",
        "striker_hold_spark_sp_active": "#FF1200",
        "striker_hold_spark": "#FF1200",
        "striker_hit_particles_sp_active": "#00FFFF",
        "striker_hit_particles": "#FF5000",
        "striker_hit_flame_sp_active": "#00FFFF",
        "striker_hit_flame": "#FFB76D",
        "striker_hit_flame_kick": "#FFB300",
        "striker_hit_flame_open": "#BA00FF",
        "sp_bar_arrow": "#7FFFFF",
        "sp_bar_elec": "#B2B2B2",
        "sp_bar_color": "#004848",
        "sp_act_animation": "#00C1E5",
        "sp_act_flash": "#0029BF",
        "general_sp_active": "#FFFFFF",
        "general_sp": "#00FFFF"
    },
    "guitar": {
        "striker_base_orange": "#FFFFFF",
        "striker_base_blue": "#FFFFFF",
        "striker_base_yellow": "#FFFFFF",
        "striker_base_red": "#FFFFFF",
        "striker_base_green": "#FFFFFF",
        "striker_head_light_open": "#FFCE86",
        "striker_head_light_orange": "#FFB300",
        "striker_head_light_blue": "#0089FF",
        "striker_head_light_yellow": "#FFFF00",
        "striker_head_light_red": "#FF0000",
        "striker_head_light_green": "#00FF00",
        "striker_head_cover_orange": "#FFB300",
        "striker_head_cover_blue": "#0089FF",
        "striker_head_cover_yellow": "#FFFF00",
        "striker_head_cover_red": "#FF0000",
        "striker_head_cover_green": "#00FF00",
        "striker_cover_orange": "#FFB300",
        "striker_cover_blue": "#0089FF",
        "striker_cover_yellow": "#FFFF00",
        "striker_cover_red": "#FF0000",
        "striker_cover_green": "#00FF00",
        "sustain_sp_active": "#00FFFF",
        "sustain_sp_phrase_active": "#00FFFF",
        "sustain_sp_phrase": "#00FFFF",
        "sustain_open": "#DB33F9",
        "sustain_orange": "#FFD23B",
        "sustain_blue": "#00C5FF",
        "sustain_yellow": "#FFFF00",
        "sustain_red": "#FF0000",
        "sustain_green": "#00FF00",
        "note_anim_sp_active": "#51FFFF",
        "note_anim_sp_phrase_active": "#FFFFFF",
        "note_anim_sp_phrase": "#51FFFF",
        "note_anim_open": "#FFFFFF",
        "note_anim_orange": "#FFBE28",
        "note_anim_blue": "#77D1FF",
        "note_anim_yellow": "#FFFF57",
        "note_anim_red": "#FF8B8B",
        "note_anim_green": "#00FF00",
        "note_sp_active": "#00FFFF",
        "note_sp_phrase_active": "#00FFFF",
        "note_sp_phrase": "#00FFFF",
        "note_open": "#BA00FF",
        "note_orange": "#FFB300",
        "note_blue": "#0089FF",
        "note_yellow": "#FFFF00",
        "note_red": "#FF0000",
        "note_green": "#00FF00"
    },
    "sixfret": {
        "sf_note_hopo": "#00FFFF",
        "sf_striker_base_white_right": "#FFFFFF",
        "sf_striker_base_white_mid": "#FFFFFF",
        "sf_striker_base_white_left": "#FFFFFF",
        "sf_striker_base_black_right": "#3F3F3F",
        "sf_striker_base_black_mid": "#3F3F3F",
        "sf_striker_base_black_left": "#3F3F3F",
        "sf_sustain_sp_active": "#00FFFF",
        "sf_sustain_sp_phrase_active": "#00FFFF",
        "sf_sustain_sp_phrase": "#00FFFF",
        "sf_sustain_open": "#FFFFFF",
        "sf_sustain_right": "#FFFFFF",
        "sf_sustain_mid": "#FFFFFF",
        "sf_sustain_left": "#FFFFFF",
        "sf_note_tap_open": "#BA00FF",
        "sf_note_tap_white_right": "#BA00FF",
        "sf_note_tap_white_mid": "#BA00FF",
        "sf_note_tap_white_left": "#BA00FF",
        "sf_note_tap_black_right": "#BA00FF",
        "sf_note_tap_black_mid": "#BA00FF",
        "sf_note_tap_black_left": "#BA00FF",
        "sf_note_sp_active": "#00FFFF",
        "sf_note_sp_phrase_active": "#00FFFF",
        "sf_note_sp_phrase": "#00FFFF",
        "sf_note_open": "#FFFFFF",
        "sf_note_white_right": "#FFFFFF",
        "sf_note_white_mid": "#FFFFFF",
        "sf_note_white_left": "#FFFFFF",
        "sf_note_black_right": "#3F3F3F",
        "sf_note_black_mid": "#3F3F3F",
        "sf_note_black_left": "#3F3F3F"
    }
};

const iniForm = document.getElementById("iniForm");
const iniTextBox = document.getElementById("iniTextBox");

// this runs when the user closes the INI input modal.
// It gets the raw .ini text and converts it to an object, then saves as the colorData var
iniForm.onsubmit = async (e) => {
    e.preventDefault();
    console.log("running onsubmit");
    const formData = new FormData(iniForm);

    // saves to the global variable
    colorData = parseINIString(formData.get("iniTextBox"));
    // do some validation here

    // updates the UI
    updateUI(colorData);

};

// this funcion updates the UI (both note sprites and color pickers) based on the colorData object.
// This should run every time the user closes the "Copy / Paste .ini" modal
function updateUI(data) {
    // loops through the main sections of the INI (drums, guitar, sixfret, other)
    for (const key in data) {

        // loops through the INI parameters inside each section (note_green, note_red, etc...)
        for (const key2 in data[key]) {
            // console.log(key2 + ": " + data[key][key2]);

            //updates each corresponding UI element.
            // updates the sprites
            let targetSprite = document.querySelector(`[data-sprite-name="${key2}"]`);
            if (targetSprite) {
                targetSprite.style.backgroundColor = data[key][key2];
            }

            // updates the color pickers
            let targetPicker = document.getElementById(key2);
            console.log(targetPicker);
            if (targetPicker) {
                targetPicker.value = data[key][key2];
            }

        }

    }
}

// Handles all color inputs.
// when an input changes, we do 2 things:
// 1 - Update the corresponding note sprite on screen
// 2 - update the global colorData variable with the selected color
const colorInputs = document.querySelectorAll('input[type="color"]');

// Add event listener to each input element
colorInputs.forEach(input => {
    input.addEventListener('input', function () {

        // updates the sprite on screen
        let target = document.querySelector(`[data-sprite-name="${this.name}"]`);
        target.style.backgroundColor = this.value;

        // updates the global colorData variable
        colorData["guitar"][this.name] = this.value;

        // pastes the new INI in the text box
        iniTextBox.value = writeINIString(colorData);

    });
});

// updates the UI once when the page loads
updateUI(colorData);

// also writes to the ini box once
iniTextBox.value = writeINIString(colorData);
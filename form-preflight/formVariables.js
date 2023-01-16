import svgToDataUri from 'mini-svg-data-uri'

const encode = svg => `url("${svgToDataUri(svg)}")`

// NB: we can't (easily) use a CSSvar for stroke here - need to just standardize on a color
const selectChevron = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
const checkMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
const checkDash = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`

const style = document.createElement('style')
style.innerHTML = `
  :root, :host {
    --x-form-bg: white;
    --x-form-focus: #0063fb;
    --x-form-focus-ring: #06befb;

    --x-form-field-bg: var(--x-form-bg);
    --x-form-field-border: #c3ccd9;
    --x-form-field-border-hover: #6f7d90;
    --x-form-field-focus: var(--x-form-focus);

    --x-form-toggle-size: 24px;
    --x-form-toggle-border: #71717a;
    --x-form-toggle-border-checked: var(--x-form-focus);
    --x-form-toggle-border-hover: var(--x-form-focus);
    --x-form-toggle-border-checked-hover: #244eb3;
    --x-form-toggle-bg: var(--x-form-bg);
    --x-form-toggle-bg-checked: var(--x-form-focus);
    --x-form-toggle-bg-hover: #eff5ff;
    --x-form-toggle-bg-checked-hover: #244eb3;

    --x-form-select-chevron: ${encode(selectChevron)};
    --x-form-check-mark: ${encode(checkMark)};
    --x-form-check-dash: ${encode(checkDash)};
  }
`
document.querySelector('head').appendChild(style)

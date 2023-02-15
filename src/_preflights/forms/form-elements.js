export const formElements = `
.label {
  user-select: none;
}

.input, .textarea, .radio, .checkbox, .select {
  display: block;
  border-width: 1px;
  /* specific properties are used here so the focus-ring via outline is instant */
  transition: background-color 0.15s linear,
              border-color 0.15s linear,
              background-size 0.2s ease,
              box-shadow 0.2s ease;
}

.input, .textarea, .select {
  line-height: 22px;
  background-color: var(--x-form-field-bg);
  border-color: var(--x-form-field-border);
  border-radius: 4px;
  padding: 12px 8px;
}
.input:hover, .textarea:hover, .select:hover {
  border-color: var(--x-form-field-border-hover);
}
.input:focus, .textarea:focus, .select:focus {
  border-color: var(--x-form-field-focus);
  outline-color: var(--x-form-field-focus);
}

.input::placeholder {
  color: var(--w-text-color-placeholder, blue);
  opacity: 1;
}

.select {
  appearance: none;
  background-image: var(--x-form-select-chevron);
  background-position: right 0px center;
  background-repeat: no-repeat;
  background-size: 32px 32px;
  padding-right: 32px;
}
/* fixes browser focus-ring behavior */
.select:focus {
  box-shadow: inset 0 0 0 1px var(--x-form-field-focus);
}
.select:active {
  border-color: var(--x-form-field-focus);
  outline-color: var(--x-form-field-focus);
}

.radio, .checkbox {
  cursor: pointer;
  appearance: none;
  user-select: none;
  flex-shrink: 0;
  height: var(--x-form-toggle-size);
  width: var(--x-form-toggle-size);
  background-color: var(--x-form-toggle-bg);
  border-color: var(--x-form-toggle-border);
}
.radio:focus-visible, .checkbox:focus-visible {
  outline: 2px solid var(--x-form-focus-ring);
  outline-offset: 2px;
}
.radio:hover, .checkbox:hover {
  background-color: var(--x-form-toggle-bg-hover);
  border-color: var(--x-form-toggle-border-hover);
}

.checkbox {
  border-radius: 4px;
  background-origin: border-box;
  background-size: 75% 75%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: var(--x-form-check-mark);
}
.checkbox:checked, .checkbox.checked, .checkbox:indeterminate {
  background-color: var(--x-form-toggle-bg-checked);
  border-color: var(--x-form-toggle-border-checked);
  background-size: 100% 100%;
}
.checkbox:checked:hover {
  background-color: var(--x-form-toggle-bg-checked-hover);
  border-color: var(--x-form-toggle-border-checked-hover);
}
.checkbox:indeterminate {
  background-image: var(--x-form-check-dash);
}

.radio {
  border-radius: 50%;
}
.radio:checked, .radio.checked {
  border-color: var(--x-form-toggle-border-checked);
  box-shadow: inset 0 0 0 calc(var(--x-form-toggle-size) / 4) var(--x-form-toggle-bg-checked);
}
`

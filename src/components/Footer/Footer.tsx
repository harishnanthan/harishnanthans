import "./Footer.scss";

const LinkIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO2dy2rVUBiFVwmpgtWBvoPaiRcUHaoT30dErZc38NKBoOhQ8TKpD1DqBX0I6wPY6lDruL8EomghOW31ZO2Vf32QUQvJupy9czbJPoAxxhhjjDHGGGOMMcYYY7bBXgCLANYBBOlYA3CvvRYzMIvE4Lced53+8KwXEPyv44sLkLsA4QIMz90CQncBiOxtS7BWQPgeAUZIDeCVC5CTeofhewRIHn6wL9pww3cBRhL+0oSQ+/5uRv7JX2r/zwVIHH6DC5A4/AYXIHH4DS5A4vAbXIDE4Te4AInDb3ABEoff4AIkDr/IAswDWACwAmAVwI9dLmWyj7UpPV+33RW+7YRfVAHOAnhXQHAlP19X/+fwiyjALIBHADYLCGtaI0Gp4dMLcAjA+wJCKr0A9ZTCpxZgNkH4AeB2weFTC/CogHCm/cm/A2BPweHTCnB2wpzfPCJ9HcBxAPuQk3qA8GkF6Lvbf5449KHDpxRgvuekzwDMIDf1gOFTCrDQM+zPITf1wOFTCrDSccJmzs9MTQifUoBPHSc8hrzUpPApBdjoOGHW4b8C8IIUPqUAlK8dhVKRw+96K/nzFM/nAhQw7E96K/lfVy978QiAYsLf+lby/1i9nEj2AlQFDPtUMhegyh5+5gJUDj9vASqHn7cAlcPPW4DK4ectQOXw8xagcvh5C1A5/LwFqAdY4ftzU2nJzZ3HWoB6oOXdRfXNncdYgGrAYX9dfXPnsRWgGnjOl/dPXgD5hi/U/ZMXQL7bD3X/5AWQv+qFun/yAgA8JYU/Cv/UBVwghj8G/+QFXCaGPwb/5AVcJIY/Bv/0BQB4vOXanwz4GJe8f/ICWs4DuATg3MDnlfdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPfve4eArD8evRMOdHj3DUL45+N3z4mOAqxCiJUOETfYFybArQ7vliHEtQ4RzY8eeBroZj+Arx3eXYEQR3tuZJoduGfYF1ggMwBe9vh2GGK8nVACjwR/f/L7wm+mVDnOANjsEdVMBzcBnExahrlW+62eYT9aD09BlIc9wnxgWx7chzDN5spvHDZ2W/YPAGYhzkEA71wC7DT8t613o6AZCR5MuCfwgd9z/v0Bt6YflNMAXjts9N3ty97w7YQjAK62q1sfAWwkLMVGq325XeSR+55vjDHGGGOMMcYYY4wxZlT8BGcgNVzRgy7uAAAAAElFTkSuQmCC";
const Footer: React.FunctionComponent = () => (
  <div className="contact__socialLinks">
    <ul>
      <li>
        <a href="mailto:harishnanthans@gmail.com">Email Me</a>
        <img src={LinkIcon}></img>
      </li>
      ·
      <li>
        <a target="_blank" href="https://github.com/harishnanthan">Github</a>
        <img src={LinkIcon}></img>
      </li>
      ·
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/harishnanthans/">LinkedIn</a>
        <img src={LinkIcon}></img>
      </li>
      ·
      <li>
        <a target="_blank" href="https://x.com/harishnanthans">Twitter</a>
        <img src={LinkIcon}></img>
      </li>
    </ul>
  </div>
);

export default Footer;

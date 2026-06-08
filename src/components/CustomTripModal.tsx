"use client";

import React, { useState } from "react";

export default function CustomTripModal() {
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => (payload[k] = String(v)));
    console.log("Custom trip submitted:", payload);
    alert("Request submitted. We'll contact you soon.");
    setOpen(false);
    form.reset();
  }

  return (
    <div className="section">
      <h3 className="section-title">Not finding your desired destinations? Create your customized trip.</h3>
      <button className="create-btn" onClick={() => setOpen(true)}>
        Create
      </button>

      {open && (
        <div className="modal-backdrop">
          <div className="modal">
            <h4>Create your trip</h4>
            <form onSubmit={handleSubmit} className="modal-form">
              <label>
                Name
                <input name="name" required />
              </label>
              <label>
                Contact
                <input name="contact" required />
              </label>
              <label>
                Destinations looking for
                <input name="destinations" />
              </label>
              <label>
                From
                <input name="from" type="date" />
              </label>
              <label>
                To
                <input name="to" type="date" />
              </label>
              <label>
                Message
                <textarea name="message" />
              </label>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" onClick={() => setOpen(false)} className="cancel-btn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

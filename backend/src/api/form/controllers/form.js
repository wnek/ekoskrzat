module.exports = {
  async sendEmail(ctx) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    const textContent = `
  Karta zgłosznie dziecka - ${ctx.request.body.childName} /n
  Dane dziecka: /n
  Imię dziecka: ${ctx.request.body.childName} /n
  Data urodzenia: ${ctx.request.body.childBirthDate} /n
  PESEL: ${ctx.request.body.childPesel} /n
  Adres zamieszkania: /n
  Miejsce zamieszkania: ${ctx.request.body.street} /n
  Miasto: ${ctx.request.body.city} /n
  Województwo: ${ctx.request.body.state} /n
  Informacje o rodzicach lub opiekunach: /n
  Imię i nazwisko rodzica/opiekuna: ${ctx.request.body.parentName} /n
  Numer telefonu: ${ctx.request.body.parentPhone} /n
  Adres email: ${ctx.request.body.parentEmail} /n
  Data rozpoczęcia: ${ctx.request.body.startDate} /n
  Uwagi: ${ctx.request.body.parentComments} /n
  `;

    const htmlContent = `
  <h1>Karta zgłosznie dziecka - ${ctx.request.body.childName} </h1>
  <h2>Dane dziecka:</h2>
  <p><strong>Imię dziecka:</strong> ${ctx.request.body.childName} </p>
  <p><strong>Data urodzenia:</strong> ${ctx.request.body.childBirthDate} </p>
  <p><strong>PESEL:</strong> ${ctx.request.body.childPesel}</p>
  <h2>Adres zamieszkania: </h2>
  <p><strong>Miejsce zamieszkania:</strong> ${ctx.request.body.street}</p>
  <p><strong>Miasto:</strong> ${ctx.request.body.city}</p>
  <p><strong>Województwo:</strong> ${ctx.request.body.state}</p>
  <h2>Informacje o rodzicach lub opiekunach:</h2>
  <p><strong>Imię i nazwisko rodzica/opiekuna:</strong> ${ctx.request.body.parentName}</p>
  <p><strong>Numer telefonu:</strong> ${ctx.request.body.parentPhone}</p>
  <p><strong>Adres email:</strong> ${ctx.request.body.parentEmail}</p>
  <p><strong>Data rozpoczęcia:</strong> ${ctx.request.body.startDate}</p>
  <p><strong>Uwagi:</strong> ${ctx.request.body.parentComments}</p>
  `;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "ekoskrzat.przedszkole@gmail.com",
        from: "przedszkole@ekoskrzat.edu.pl",
        subject:
          "Karta zgłoszenia dziecka - " +
          ctx.request.body.childName +
          " - " +
          formattedDate,
        text: textContent,
        html: htmlContent,
      });

      ctx.send({
        message: "Email sent successfully",
      });
    } catch (error) {
      ctx.send({
        message: "Email not sent",
        error: error.message,
      });
    }
  },
};

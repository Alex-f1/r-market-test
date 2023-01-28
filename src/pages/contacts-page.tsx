import LayoutInner from "../components/LayoutInner/LayoutInner";
import Title from "../components/Title/Title";

function ContactsPage() {
  return ( 
    <LayoutInner>
      <Title text="Контакты"/>
      <div>
        <div className="text-info">
          <div className="mb-4 flex items-center">
            <strong className="mr-2 text-xl">Телефон:</strong> 
            <a className="bg-orange-400 text-white rounded-sm py-0.5 px-2" href="tel:+998936469836">+998936469836</a>
          </div>
          <div className="mb-4 flex items-center">
            <strong className="mr-2 text-xl">E-mail:</strong> 
            <a className="bg-orange-400 text-white rounded-sm py-0.5 px-2" href="mailto:test@test.com">test@test.com</a>
          </div>
          <div className="mb-4 flex items-center">
            <strong className="mr-2 text-xl">Телеграм:</strong>
            <a className="w-8 h-8 bg-orange-400 rounded-sm flex justify-center items-center" href="#">
              <img className="w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENElEQVR4nO2ZW4hVZRTH90zecuwpL43iKGVp+qBSpJVlSdpLFylNo4hKiUAi6UGTyIwedBIMLz0YVtIdotDppVBETcQoS6MyLYIwSlG7GGnq5E+W/Hcu95y9z7dnzzkzxfmDyOx132vttdb3nSiqoYYaaqihgwH0AxYAO4FTwA5gWPRfAXAV8CpwnLbYGHVlAD2Ae4Htzul/gPXArcAVevZb1BUBXAIsBH52AfwKLAUudXwjRfs+6koArgFeB064AL4EHgF6l+C3bBnWdY7HbctnOrAhUT4fALcAdRmyliHDwup6fb4TA4D5wH4XwO/AcmBooI6Nkru98h63NT4OeCNRPruB2cCFKfy7gE0laIckP7ia5XMf8IlzvhV4D7gpRaYXsER8hk8T9CY9P9Rly0dZ+MbJ2Ju/LMFzp2gfVbr7BJdPRhbQABxfgveZs1RorlT32UbO7pOSBcNpK8kUfhuKhhkdObzs7fzCORzWm20KkE9mwfanGE9nyP0onuEdsfusTuw+3wKPlxpeAVmw7LXoJRjeScsicLF4/gTqqzq8ymThO2CKNlnDx0DPDPnJMV/Vh1dGFiyrDcqA4Qegfxkd88S7ItTocOC1vN0nMAsWzDjRmt1iOCJA11vifzjE8B0ugMzhlTMLrQqol2iz9PwkMClQ3x7JjA1hjrvC6pDukzcLok9SAIZZgTobVJL2knuECByUgaeCBHJkQfQRKiXD8zn0XieZz0MFnnDfxRFgjbrFBUWyIJ6+dhgS/f08LRSYI7lXohxC92vz9LBMvQjcmHSgXBbE01Pt1fCZlUqwQ9FZeXuhhsfyyMXCVwKL3EcW4ydgGXB9IgtfJ7MgPXXqgqiVD2yHLzslPyF3IAlFoxTUvkRQqVlwsnYOjyfymHYO5L/1sfcpFEiJUlomxwzTM3hnaglsbe+JDhgtO3sLOZ5hYK0MzE+hXw38JZ65Bew8JB1vF3I4w8DdMrCtBG0ocED0NQXtrJCeeYUczjBwkWrXyqZvgvaFjG8GuhW0s1W6phR2OsPIhzLygHs2zDWCY7biF9BfDxyVrn4d5njGoHo3MYcMf7iA1uadHQbg8rhtR5UEMESGjsYrDbBKz54EHnQf/Fd5T3bAPZJtqVgQztguX8NueE3U33NdZixLd+XQvVhyz1YyhtjYczK2UlvqKf1r0Bw56Y7EaK40hzQBzn2DU6sRiF0DoSPAzW6felTTGJ0q63QxHZ93ttglRhndB8TbVI1A6t1typv6/7B7++f1f+AG99OB7W3XpugdJJ4jFQ/CGX1JRuMMoPkyO4W/0c0Hy9CcEjy3Vf2XKW3CHjYop5WR6Q684GTsN5J/r5TsfkvPl1YlCGf4ZXdnOzmH3Ay3gO7WktjomsPMynqefoXUniPyyBLnHrTq5Lq56XRod1ul7ndQjaOxs/2qoYbof4IzO76bLJe11xUAAAAASUVORK5CYII=" alt="" />
            </a>
          </div>
          <div className="mb-4 flex items-center">
            <strong className="mr-2 text-xl">Адрес:</strong>
            <span className="rounded-sm py-0.5 px-2 text-lg">
              г. Фергана, Киргили | пн-вс: 9:00 - 18:00
            </span>
          </div>
        </div>
      </div>
    </LayoutInner>
  );
}

export default ContactsPage;
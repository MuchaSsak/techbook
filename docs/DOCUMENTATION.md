# Techbook 📖

Aby zobaczyć tą aplikację na żywo, [kliknij tutaj](https://mm-techbook.vercel.app).

## Dokumentacja

### 1. Założenie konta

1.1. W ścieżce `/register` należy wypełnić odpowiednie dane do formularza, po czym potwierdzić swój adres email klikając w link wysłany na niego.

### 2. Logowanie

#### 2.1 Za pomocą hasła:

2.1.1. Przy próbie wejścia na protektowane ścieżki, użytkownik zostaje automatycznie przekierowywany do `/login`.

2.1.2. Po wypełnieniu poprawnych danych uwierzytelniających istniejącego już konta, użytkownik zostaje przekierowywany do `/` i może przeglądać resztę aplikacji.

#### 2.2. Za pomocą maila:

2.2.1. Podaj swój adres email do formularza na ścieżce `/login-otp`.

2.2.2. Otwórz link wysłany na twoją pocztę.

2.2.3. Na `/verify-otp` wystarczy już tylko nacisnąć przycisk potwierdzający akcję aby zostać zalogowanym.

### 3. Resetowanie hasła

3.1. Aby zresetować swoje hasło, trzeba podać swój adres email na `/forgot-password`.

3.2. Następnie wejdź na swoją pocztę i kliknij w wysłany link.

3.3. Przy wejściu na `/update-password` można już ustalić nowe hasło.

### 4. Dodawanie książek do koszyka

4.1. Na stronie głównej (`/`) prezentują się przykładowe książki z bazy danych, które zawierają przycisk dodający je do koszyka.

### 5. Modyfikowanie koszyka

5.1. Po kliknięciu w ikonę koszyka na pasku nawigacji bądź manualnie wprowadzając ścieżkę `/shopping-cart` odwiedza się swój koszyk, który przechowywuje dane w lokalnym magazynie przeglądarki.

5.2. Aby zwiększyć lub zmniejszyć ilość danego przedmiotu, wystarczy kliknąć w przyciski inkrementacji/dekrementacji identyfikowane ikonami strzałki.

5.3. Żeby usunąć przedmiot z koszyka kompletnie, należy kliknąć w przycisk z ikoną kosza.

### 6. Potwierdzanie zakupu

6.1. W ścieżce `/checkout` zawiera się formularz kontaktowy, który użytkownik musi wypełnić aby potwierdzić swój zakup.

6.2. Z kolei że ta aplikacja jest tylko demonstracyjna, nacisnięcie przycisku potwierdzającego w formularzu już wysyła wszystkie informacje do bazy danych bez żadnych metod płatności

## Technologie

- [Next.js](https://nextjs.org/)
- [Tanstack Query](https://tanstack.com/query)
- [Supabase](https://supabase.com)
- [shadcn/ui](https://ui.shadcn.com/)

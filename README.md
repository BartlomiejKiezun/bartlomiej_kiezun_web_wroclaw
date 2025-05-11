# Aplikacja stworzona na potrzeby rekrutacji na staż do Ocado Technology 


- W projekcie wykorzystane zostały technologie React.js, html, css.
W aplikaci wykorzystano bibliotekę "REACT ROUTER DOM", dzieki której można obsłużyć routing aplikacji uruchomionej w przęglądarce. Aplikacja dzięki dynamicznym tras działa szybko bez konieczności odświeżania strony.

- Aplikacja aby była skalowalna pobiera liste produktów z osobnego pliku "ProductList.jsx", dzięki czemu można dodać ∞ ilośc produktów w jednym miejscu. 


Uruchomienie
  ```
  # tworzymy środowisko dla aplikacji:
  #instalacja node.js (jeśli nie mamy)
  (https://nodejs.org/)

  #tworzenie projektu za pomocą vite
  $  npm create vite@lastes

  # przejście do odpowieniego katalogu projketu
  $ cd /sciezka
  #instlalacja paczki
  $ npm install

  #Jesli instalacja przebiegła pomyślnie uruchamiamy projekt na serwerze lokalnym
  $ npm run dev   


- Możlwie błędy

  ```
  # Przy poleceniu npm create vite@lastes może wyskoczyć błąd "cannot be loaded because running scripts is disabled on this system"

  Błąd oznacza zablokowanie uruchamiania skryptów w PowerShell
  # naprawa
  1. Uruchom PowerShell jako administrator
  2. wpisz polecenie $ Set-ExecutionPolicy RemoteSigned
  3. Potwierdź wpisując Y

  ```


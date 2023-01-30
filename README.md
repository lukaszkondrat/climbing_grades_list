# climbing_grades_list

Idea jest taka, że napisałem sobie apkę do zapisywania trudności dróg wspinaczkowych, które zrobiłem na ściance.
Na początku jest jakieś proste uwierzytelnianie i potem pojawia się forma z polami do wypełnienia + lista z już zapisanymi drogami.
Dodatkowo wysyłam to sobie do Firebase, który służy mi za bazę danych.
Na chwilę obecną w sumie dzieje się to, co sobie zaplanowałem, ale do końca nie rozumiem jednej rzeczy:

1) w App.js używam useEffect, żeby ściągnąć dane z Firebase i wszystko działa, ale tylko wtedy jak nie mam dodanej pustej tablicy [] z dependencies...
Jak ją dodaje, to np. przycisk Delete przestaje działać i nie jestem w stanie usunąć poszczególnego paska z danymi pojedynczej drogi.
Nie wiem, czemu tak jest, może Ty będziesz wiedział :)

Dodatkowo, napisałem sobie funkcjonalność sortowania tych dróg po wycenie, czyli że np 7a jest przed 7b, które jest przed 7c itp. I to działa, o ile mam
te dane tylko lokalnie i nie wysyłam ich do Firebase. Bo jak potem próbuje wysłać taka posortowaną listę do Firebase
(nie wiem, czy użyć PATCH czy PUT i gdzie powinno nastąpić to wysłanie do backendu), to lista dróg się nie aktualizuje zgodnie z tym, czego bym oczekiwał,
więc póki co to umieściłem tylko w komentarzach w kodzie.

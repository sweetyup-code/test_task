<?php

header('Content-Type: application/json');

//декодируем json в массив
$data = json_decode(file_get_contents('php://input'), true);
//получаем имя и email
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');

$nameRegex = '/^[А-Яа-яЁёA-Za-z -]+$/';
$emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';

//проверка валидности данных на стороне сервера
if ($name === '') {
    echo json_encode([
        'success' => false,
        'message' => 'Введите имя'
    ]);
    exit;
}

if (!preg_match($nameRegex, $name)) {
    echo json_encode([
        'success' => false,
        'message' => 'Введите корректное имя'
    ]);
    exit;
}

if ($email === '') {
    echo json_encode([
        'success' => false,
        'message' => 'Введите e-mail'
    ]);
    exit;
}

if (!preg_match($emailRegex, $email)) {
    echo json_encode([
        'success' => false,
        'message' => 'Введите корректный e-mail'
    ]);
    exit;
}

//собираем всё в нужный формат, отправляем в файл, выводим сообщение об успехе
$text = "Имя: $name | E-mail: $email" . PHP_EOL;

file_put_contents('requests.txt', $text, FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Спасибо, заявка принята'
]);
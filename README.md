# **RONIX test task**

[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-blue?logo=tailwindcss&logoColor=white) [![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev/) <br/> [![Node.js](https://img.shields.io/badge/Node.js-22.x-green)](https://nodejs.org/) [![Express](https://img.shields.io/badge/Express-5.1.0-lightgrey)](https://expressjs.com/) [![Mongoose](https://img.shields.io/badge/Mongoose-8.16.0-brightgreen)](https://www.mongodb.com/try) <br/> [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/cptblackmore/ronix-test-task/blob/main/LICENSE)

Тестовое задание на позицию Frontend-разработчика в компании **RONIX SYSTEMS**.

Проект состоит одновременно из клиентской (React + TS + Vite + Tailwind) и серверной части (Node.js + TS + Express + MongoDB). 

Взаимодействие с сервером осуществляется по REST API, с валидацией X-Api-Key заголовка, значения которого хранятся в файлах `.env` (файлы уже лежат в репозитории для удобства демонстрации).

<br/>
<p align="center">
  <img src="https://github.com/user-attachments/assets/4af96c27-ef7a-4f6e-a744-4acadc571154" width="90%" alt="Результат тестового задания"/>
</p>

###### Мои проекты

[![JobTracker](https://img.shields.io/badge/JobTracker-96b9ff.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3MiA3Mic+DQogIDxyZWN0IHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgcng9JzgnIGZpbGw9JyMzNzVFOTcnIC8+DQogIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUsIDUpJyBmaWxsPScjRUFGMkZGJz4NCiAgICA8cGF0aCBkPSdNMTEuNDAgNDlRNy44NSA0OSA0Ljg4IDQ3LjY3UTEuOTAgNDYuMzUgMCA0My45MEw0LjUwIDM4LjUwUTUuOTUgNDAuNDAgNy41NSA0MS4zOFE5LjE1IDQyLjM1IDExLjAwIDQyLjM1UTE1Ljk1IDQyLjM1IDE1Ljk1IDM2LjU1TDE1Ljk1IDE5LjkwTDMuNjUgMTkuOTBMMy42NSAxMy40MEwyNC4wMCAxMy40MEwyNC4wMCAzNi4xMFEyNC4wMCA0Mi42MCAyMC44MCA0NS44MFExNy42MCA0OSAxMS40MCA0OVpNMzkuMjUgNDguNDBMMzkuMjUgMjAuMDBMMjguMDUgMjAuMDBMMjguMDUgMTMuNDBMNTguNTUgMTMuNDBMNTguNTUgMjAuMDBMNDcuMzUgMjAuMDBMNDcuMzUgNDguNDBMMzkuMjUgNDguNDBaJy8+DQogIDwvZz4NCjwvc3ZnPg==)](https://github.com/cptblackmore/jobtracker) [![JobTracker Server](https://img.shields.io/badge/JobTracker-Server-96b9ff.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3MiA3Mic+DQogIDxyZWN0IHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgcng9JzgnIGZpbGw9JyMzNzVFOTcnIC8+DQogIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUsIDUpJyBmaWxsPScjRUFGMkZGJz4NCiAgICA8cGF0aCBkPSdNMTEuNDAgNDlRNy44NSA0OSA0Ljg4IDQ3LjY3UTEuOTAgNDYuMzUgMCA0My45MEw0LjUwIDM4LjUwUTUuOTUgNDAuNDAgNy41NSA0MS4zOFE5LjE1IDQyLjM1IDExLjAwIDQyLjM1UTE1Ljk1IDQyLjM1IDE1Ljk1IDM2LjU1TDE1Ljk1IDE5LjkwTDMuNjUgMTkuOTBMMy42NSAxMy40MEwyNC4wMCAxMy40MEwyNC4wMCAzNi4xMFEyNC4wMCA0Mi42MCAyMC44MCA0NS44MFExNy42MCA0OSAxMS40MCA0OVpNMzkuMjUgNDguNDBMMzkuMjUgMjAuMDBMMjguMDUgMjAuMDBMMjguMDUgMTMuNDBMNTguNTUgMTMuNDBMNTguNTUgMjAuMDBMNDcuMzUgMjAuMDBMNDcuMzUgNDguNDBMMzkuMjUgNDguNDBaJy8+DQogIDwvZz4NCjwvc3ZnPg==)](https://github.com/cptblackmore/jobtracker-server) [![TypeWeather](https://img.shields.io/badge/TypeWeather-3b3b54.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGlkPSJMb2dvIj4NCjxnIGlkPSJWZWN0b3IiPg0KPHBhdGggaWQ9IlZlY3Rvcl8yIiBkPSJNMjIuNjY1IDE5Ljc4MDNDMjEuNTkzOSAxOS43ODAzIDIwLjkzNDEgMTkuMjg1OCAxOS44NTU5IDE4LjcwMzRDMTguNzc3NyAxOC4xMjEgMTUuNjU5MyAxNS43NzYxIDE1LjY1OTMgMTIuODU3MkMxNS42NTkzIDEwLjg3NzEgMTUuMTQ4OSA5LjI3NTU1IDE0LjI3OTYgNy45OTkyMkMxMy40MTY4IDYuNzMyNjkgMTIuMjQ4IDUuODU1MiAxMS4wMzIgNS4yMzU3OEMxMC40NDYgNC45MzczNiA5LjgzNjI4IDQuNjkzMzEgOS4yMjkwOSA0LjQ5MTYyQzguODc1MTIgNC4zNzQxMiA4LjY2OTcgMy45OTQwNCA4LjgyMzI5IDMuNjU0MjVDOS43OTY2OCAxLjQ5OTMxIDExLjk2NDUgMCAxNC40ODI4IDBDMTcuOTEwNyAwIDIwLjY4OTcgMi43Nzg4NyAyMC42ODk3IDYuMjA2OTNDMjAuNjg5NyA2Ljk0MDMyIDIwLjU2MjUgNy42NDQxIDIwLjMyODkgOC4yOTcxOEMyMS4zMTgzIDcuNjMwNDIgMjIuNTEwNCA3LjI0MTM0IDIzLjc5MzIgNy4yNDEzNEMyNy4yMjExIDcuMjQxMzQgMjkuOTk5OSAxMC4wMjAyIDI5Ljk5OTkgMTMuNDQ4M0MyOS45OTk5IDE3LjU3NTEgMjYuMzczNSAxOS43ODAzIDIyLjY2NSAxOS43ODAzWiIgZmlsbD0iIzhGQjJGNSIvPg0KPHBhdGggaWQ9IlZlY3Rvcl8zIiBkPSJNMCAxMi45MzEyQzAgMTYuMjAyOSAyLjE1NzA0IDE4LjkyOSA1LjAxNDYxIDE5LjUzMTRDNS40NTU2OCAxOS42OTI1IDUuOTMxODUgMTkuNzgwNCA2LjQyODYgMTkuNzgwNEgxNi4wNzIzQzE2LjM5NTcgMTkuNzgwNCAxNi41MzY1IDE5LjM0NzkgMTYuMjg5NiAxOS4xMzg5QzE0LjYwNDIgMTcuNzEyOSAxMy4zNTE3IDE1LjcwMzEgMTMuMzUxNyAxMi44NTczQzEzLjM1MTcgMTEuMjkzNiAxMi45NTU3IDEwLjE1NDcgMTIuMzcyNCA5LjI5ODUxQzExLjc4MjQgOC40MzI0NyAxMC45NTI2IDcuNzg1MTkgOS45ODQ2NCA3LjI5MkM5LjAwNzY5IDYuNzk0NDMgNy45NDcwNyA2LjQ3NzQ1IDYuOTM0MjIgNi4yNTI3NEM2LjY5NTY3IDYuMjIyNjQgNi40NTI5IDYuMjA3MDIgNi4yMDY5MyA2LjIwNzAyQzIuNzc4ODcgNi4yMDcwMiAwIDkuMjE3NTUgMCAxMi45MzEyWiIgZmlsbD0iIzhGQjJGNSIvPg0KPC9nPg0KPC9nPg0KPC9zdmc+DQo=)](https://github.com/cptblackmore/typeweather) [![React ToDo List](https://img.shields.io/badge/React_ToDo_List-13877b?logo=react)](https://github.com/cptblackmore/reacttodolist)


## Установка и запуск

0. Перед началом убедитесь, что у вас есть:
   - Node.js версии **20.11 и выше** — [скачать с nodejs.org](https://nodejs.org/)
   - Git — [скачать с git-scm.com](https://git-scm.com/)
   - Локально установленный и **запущенный MongoDB сервер** — [скачать с mongodb.com](https://www.mongodb.com/try/download/community)
     - По умолчанию сервер ожидает MongoDB на `mongodb://localhost:27017`
     - Убедитесь, что `mongod` запущен и порт 27017 открыт
1. Клонируйте репозиторий: `git clone https://github.com/cptblackmore/ronix-test-task`
2. Перейдите в него: `cd ronix-test-task`
3. Установите зависимости проекта: `npm install`
4. Установите зависимости **client** и **server**: `npm run install:all`
5. Запустите: `npm run dev`
6. В терминале должно появиться подтверждение о запуске сервера `Server started on port 5000` и адрес для доступа к фронтенду: `http://localhost:5173`

> ⚠️ Файлы `.env` создавать не нужно. Они уже заполнены, служат для демонстрации и не содержат секретных данных.

## Author

**Victor** _aka_ **captain_blackmore**

- [Telegram](https://t.me/captain_blackmore)
- [Github](https://github.com/cptblackmore)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/cptblackmore/ronix-test-task/blob/main/LICENSE) file for details.

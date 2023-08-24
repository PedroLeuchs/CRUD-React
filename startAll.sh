@echo off

rem Navegue até o diretório do projeto CRUD-React
cd "C:\Users\pedro\OneDrive - Biopark Educação\programação\CRUD-React"

rem Inicie o servidor em uma janela de terminal
start /B startServer.bat

rem Aguarde alguns segundos para o servidor iniciar
timeout /t 5 > nul

rem Inicie a aplicação web em outra janela de terminal
start /B startWeb.bat

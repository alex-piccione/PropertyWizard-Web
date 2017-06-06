:: if no "script" is defined in package.json it will run node server.js

:: this one ignore errors on build !
::npm run start_dev

call npm run build

IF %ERRORLEVEL% neq 0 GOTO :ERROR

:: no error, run it
npm run start_dev

GOTO END

:ERROR

echo.
echo.
echo Error level for build is "%ERRORLEVEL%".
echo Check the error(s).
echo.

pause

:END

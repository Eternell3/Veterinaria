CREATE OR REPLACE FUNCTION FN_VALIDAR_CORREO_DUPLICADO(IN p_email VARCHAR)  
RETURNS boolean  AS 

$body$
DECLARE

cantidad_registros INTEGER;


BEGIN 


SELECT COUNT(*)
INTO cantidad_registros
FROM PROPIETARIO 
WHERE email = p_email;


	IF cantidad_registros > 0 THEN 
		RETURN True;
	ELSE
		RETURN False;
	END IF;



END 
$body$
LANGUAGE plpgsql;	
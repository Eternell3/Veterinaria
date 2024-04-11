CREATE OR REPLACE FUNCTION FN_VALIDAR_RUT_DUPLICADO(IN p_rut VARCHAR)  
RETURNS boolean  AS 

$body$
DECLARE

cantidad_registros INTEGER;


BEGIN 


SELECT COUNT(*)
INTO cantidad_registros
FROM PROPIETARIO 
WHERE RUT = p_rut;


	IF cantidad_registros > 0 THEN 
		RETURN True;
	ELSE
		RETURN False;
	END IF;



END 
$body$
LANGUAGE plpgsql;	
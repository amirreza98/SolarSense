from pymodbus.client import ModbusTcpClient

def read_data(ip="192.168.168.91", port=10502):
    client = ModbusTcpClient(ip, port)
    client.connect()
    result = client.read_input_registers(0, 10)  # آدرس رو تغییر بده طبق دستگاهت
    client.close()

    if result.isError():
        return None

    return {
        "soc": result.registers[0] / 10.0,
        "voltage": result.registers[1] / 10.0,
        "current": result.registers[2] / 10.0
    }
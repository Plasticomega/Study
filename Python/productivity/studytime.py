import time

start = time.time()
while True:
    time.sleep(1)
    print('\033c')
    total_secs = round(time.time() - start)
    minute = round(total_secs / 60)
    seconds = round(total_secs % 60)
    s = f"{minute:02d}:{seconds:02d}"
    print(s)

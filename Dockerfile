FROM python:3.8
WORKDIR /code
ENV FLASK_APP tailleurs.py
ENV FLASK_RUN_HOST 0.0.0.0
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
#CMD ["flask", "run"]



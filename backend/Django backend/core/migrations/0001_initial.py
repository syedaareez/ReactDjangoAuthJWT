# Generated by Django 3.2.6 on 2021-08-30 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200)),
                ('code', models.CharField(max_length=12)),
                ('author', models.CharField(blank=True, max_length=50)),
            ],
        ),
    ]
